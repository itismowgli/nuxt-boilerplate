import MyPage from '~/components/Page'
import * as HeaderStories from '~/stories/Header.stories'

export default {
  title: 'Example/Page',
  component: MyPage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPage },
  template: '<my-page :user="user" />',
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
}
