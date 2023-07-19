import { MdPictureAsPdf } from 'react-icons/md'

export default {
  name: 'policies',
  title: 'Policies',
  type: 'document',
  icon: MdPictureAsPdf,
  liveEdit: false,
  fields: [
    {
      name: 'policies',
      title: 'Policies',
      type: 'array',
      of: [{ type: 'policy' }]
    }
  ]
}
