import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export interface ChatFooterProps {
  [key: string]: any;
}

/**
 * 底部组件
 * @returns
 */
function ChatFooter(props: ChatFooterProps) {
  return (
    <div
      {...props}
      className={classnames(styles.empty_block, props?.className)}
    >
      <div className={styles.footer}>
        <div className={styles.chat_btn}></div>
      </div>
    </div>
  );
}

export default ChatFooter;
