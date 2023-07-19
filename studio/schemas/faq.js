export default {
  name: 'faq',
  title: 'Faq',
  type: 'object',
  fields: [
    { name: 'question', title: 'Question', type: 'string' },
    { name: 'answer', title: 'Answer', type: 'blockText' }
  ]
  // validation: Rule => Rule.max(20).warning(`A tag shouldn't exceed 20 characters.`)
}
