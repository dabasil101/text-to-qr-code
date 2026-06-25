import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Card, Text, TextInput, useTheme } from 'react-native-paper';

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedText, setScannedText] = useState('');
  const theme = useTheme();

  if (!permission) {
    return <View style={styles.center}><Text>Requesting camera permission...</Text></View>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={{ marginBottom: 16 }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const handleBarcodeScanned = ({ data }) => {
    if (data && data !== scannedText) {
      setScannedText(data);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.cameraCard}>
        <CameraView
          style={StyleSheet.absoluteFillObject}
          facing="back"
          onBarcodeScanned={handleBarcodeScanned}
          barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
        />
        <View style={styles.overlay}>
          <View style={[styles.targetFrame, { borderColor: theme.colors.primary }]} />
        </View>
      </Card>

      <Card style={styles.resultCard} mode="md3">
        <Card.Content>
          <Text variant="titleMedium" style={{ marginBottom: 8, color: theme.colors.primary }}>
            Scanned Result
          </Text>
          <TextInput
            mode="flat"
            multiline
            editable={false}
            value={scannedText || 'Point camera at a QR code...'}
            placeholder="No data scanned yet"
            style={styles.resultText}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'space-between' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  cameraCard: { flex: 1.2, borderRadius: 28, overflow: 'hidden', marginBottom: 20, elevation: 2 },
  overlay: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' },
  targetFrame: { width: 200, height: 200, borderWidth: 2, borderRadius: 16, backgroundColor: 'transparent' },
  resultCard: { flex: 0.8, borderRadius: 24, justifyContent: 'center' },
  resultText: { backgroundColor: 'transparent', paddingHorizontal: 0 }
});