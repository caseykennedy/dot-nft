import { MdPictureAsPdf } from 'react-icons/md'

export default {
  name: 'policy',
  title: 'Policy',
  type: 'document',
  icon: MdPictureAsPdf,
  liveEdit: false,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'pdf',
      title: 'PDF File',
      type: 'pdf'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'avatar'
    }
  }
}
