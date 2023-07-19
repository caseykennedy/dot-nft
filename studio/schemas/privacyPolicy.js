import { MdPictureAsPdf } from 'react-icons/md'

export default {
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  icon: MdPictureAsPdf,
  liveEdit: false,
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    }
  ]
}
