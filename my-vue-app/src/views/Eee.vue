<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  data() {
    return {
      markdownContent: '# Hello, Markdown!\n## 123123123123'
    };
  },
  computed: {
    compiledMarkdown() {
      const md = new MarkdownIt();
      return md.render(this.markdownContent);
    }
  }
}
</script>