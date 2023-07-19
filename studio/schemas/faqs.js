import { MdPictureAsPdf } from 'react-icons/md'

export default {
  name: 'faqs',
  title: 'FAQs',
  type: 'document',
  icon: MdPictureAsPdf,
  fields: [
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'faq' }]
    }
  ]
}
