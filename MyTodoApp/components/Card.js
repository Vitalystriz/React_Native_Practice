import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from '../styles/Theme';

export default function ArticleCard({ article, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={article.image} style={styles.image} />
      <View style={styles.content}>
        
        <View style={styles.headerRow}>
          <Text style={styles.timestamp}>2h ago</Text>
          <Text style={styles.category}>{article.trending ? " TRENDING" : ""}</Text>
        </View>
        <Text style={styles.title} numberOfLines={1}>{article.title}</Text>
        <Text style={styles.snippet} numberOfLines={3}>{article.content}</Text>
        <Text style={styles.author}>{article.author}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBg,
    marginBottom: SPACING.lg,
    borderRadius: SPACING.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
    gap: SPACING.md
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: SPACING.sm,
    backgroundColor: COLORS.border
  },
  content: {
    flex: 1,
    justifyContent: 'space-between'
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timestamp: {
    fontSize: FONTS.small,
    color: COLORS.secondary
  },
  category: {
    fontSize: FONTS.small,
    fontWeight: FONTS.bold,
    color: COLORS.accent2
  },
  title: {
    fontSize: FONTS.standard,
    fontWeight: FONTS.semiBold,
    color: COLORS.primary,
    fontFamily: FONTS.fontFamily
  },
  snippet: {
    fontSize: FONTS.small,
    color: COLORS.secondary
  },
  author: {
    fontSize: FONTS.small,
    fontWeight: FONTS.lightBold,
    color: COLORS.primary
  }
});