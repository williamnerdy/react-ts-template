import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withInfo({ inline: true, header: false }));
addDecorator(withKnobs);
addDecorator(withA11y);
