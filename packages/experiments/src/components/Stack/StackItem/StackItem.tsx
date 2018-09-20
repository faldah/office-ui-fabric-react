import * as React from 'react';
import { createStatelessComponent, IViewComponentProps } from '../../../Foundation';
import { IStackItemProps, IStackItemStyles } from './StackItem.types';
import { styles } from './StackItem.styles';

const view = (props: IViewComponentProps<IStackItemProps, IStackItemStyles>) => {
  const childNodes: React.ReactElement<{}>[] = React.Children.toArray(props.children) as React.ReactElement<{}>[];
  const first = childNodes[0];
  if (!first) {
    return <span />;
  }

  return <span className={props.classNames.root}>{first}</span>;
};

export const StackItem: React.StatelessComponent<IStackItemProps> = createStatelessComponent<IStackItemProps, IStackItemStyles>({
  displayName: 'StackItem',
  styles,
  view
});

export default StackItem;
