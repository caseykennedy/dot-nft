import { MdPictureAsPdf } from 'react-icons/md'

export default {
  name: 'termsOfUse',
  title: 'Terms Of Use',
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
