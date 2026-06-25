import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Card, Text, useTheme } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';

export default function CreateScreen() {
  const [text, setText] = useState('https://zelox.xyz'); 
  const theme = useTheme();

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card style={styles.card} mode="elevated">
          <Card.Content style={styles.qrContainer}>
            {text.trim() ? (
              <QRCode 
                value={text} 
                size={220} 
                backgroundColor={theme.colors.surface}
                color={theme.colors.onSurface}
              />
            ) : (
              <View style={styles.placeholder}>
                <Text variant="bodyMedium" style={{ color: theme.colors.outline }}>
                  Enter text below to generate code
                </Text>
              </View>
            )}
          </Card.Content>
        </Card>

        <TextInput
          label="Content (Text or URL)"
          value={text}
          onChangeText={setText}
          mode="outlined"
          placeholder="Type something..."
          right={<TextInput.Icon icon="qrcode" />}
          style={styles.input}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  card: { padding: 16, borderRadius: 24, alignItems: 'center', marginBottom: 24, elevation: 4 },
  qrContainer: { alignItems: 'center', justifyContent: 'center', minHeight: 240 },
  placeholder: { height: 220, justifyContent: 'center', alignItems: 'center' },
  input: { width: '100%' }
});