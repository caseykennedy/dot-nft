import S from '@sanity/desk-tool/structure-builder'
import {
  MdStop,
  MdSettings,
  MdPictureAsPdf,
  MdInsertDriveFile
} from 'react-icons/md'
import { GoFile } from 'react-icons/go'

export default () =>
  S.list()
    .title('dotNFT Content')
    .items([
      // Settings
      // _________________________________________________________________
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),

      // Policies
      // _________________________________________________________________
      S.listItem()
        .title('Policies')
        .child(
          S.editor()
            .id('policies')
            .schemaType('policies')
            .documentId('policies')
            .title('Policy Documents')
        )
        .icon(MdPictureAsPdf),

      // Faqs
      // _________________________________________________________________
      S.listItem()
        .title('FAQs')
        .child(
          S.editor()
            .id('faqs')
            .schemaType('faqs')
            .documentId('faqs')
            .title('FAQs')
        )
        .icon(MdPictureAsPdf),

      // People
      // _________________________________________________________________

      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),

      // Post Category
      // _________________________________________________________________

      S.listItem()
        .title('Post Categories')
        .schemaType('postCategory')
        .child(S.documentTypeList('postCategory').title('Post Category'))

        .icon(MdStop),

      // Post
      // _________________________________________________________________

      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Post'))

        .icon(GoFile),

      // Privacy Policy
      // _________________________________________________________________
      S.listItem()
        .title('Privacy Policy')
        .child(
          S.editor()
            .id('privacyPolicy')
            .schemaType('privacyPolicy')
            .documentId('privacyPolicy')
            .title('Privacy')
        )
        .icon(MdInsertDriveFile),

      // Terms of use
      // _________________________________________________________________
      S.listItem()
        .title('Terms Of Use')
        .child(
          S.editor()
            .id('termsOfUse')
            .schemaType('termsOfUse')
            .documentId('termsOfUse')
            .title('Terms')
        )
        .icon(MdInsertDriveFile)

      // End
      // _________________________________________________________________
    ])
