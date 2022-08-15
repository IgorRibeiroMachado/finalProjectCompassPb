// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import TitleComponent from './title.component';

export default {
  title: 'Example/Title',
  component: TitleComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TitleComponent> = (args: TitleComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Olá,',
};

