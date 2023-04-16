import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export interface ChatBubbleProps {
  arrow?: 'left' | 'right';
  info?: string;
}
function ChatBubble(props: ChatBubbleProps) {
  const { info, arrow = 'left' } = props;
  return (
    <div
      className={classnames(styles.chat_bubble_wrap, styles[`wrap_${arrow}`])}
    >
      <div className={classnames(styles.chat_bubble, styles[arrow])}>
        {info}
      </div>
    </div>
  );
}

export default ChatBubble;
