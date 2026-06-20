import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView, StatusBar } from 'react-native';
import { articlesList } from './data/articles';
import ArticleCard from './components/Card';
import AppButton from './components/MainButton';
import { COLORS, FONTS, SPACING } from './styles/Theme';

export default function App() {
  const [articles, setArticles] = useState(articlesList);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreateArticle = () => {
    if (!title || !content) return;
    const newArticle = {
      id: String(articles.length + 1),
      author: 'CURRENT_USER',
      title: title,
      content: content,
      image: require('./assets/favicon.png'),
      trending: false
    };
    setArticles([newArticle, ...articles]);
    setTitle('');
    setContent('');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>Foo News</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput 
          placeholder="Article Title" 
          style={styles.input} 
          value={title}
          onChangeText={setTitle}
        />
        <TextInput 
          placeholder="Content Description" 
          style={[styles.input, { height: 80 }]} 
          multiline
          value={content}
          onChangeText={setContent}
        />
        <AppButton title="Create article" onPress={handleCreateArticle} />
      </View>

      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ArticleCard article={item} onPress={() => alert(`Opening: ${item.title}`)} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 15 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F2F2F7'
  },
  headerContainer: {
    backgroundColor: COLORS.accent,
    padding: SPACING.md,
    alignItems: 'flex-start', // CHANGE 2
    justifyContent: 'flex-start'
  },
  logoText: {
    fontSize: FONTS.large,
    fontWeight: FONTS.bold,
    color: '#FFFFFF'
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    gap: 8
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    borderRadius: SPACING.md,
    backgroundColor: '#F8F9FA'
  }
});