import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export interface ChatFooterProps {
  [key: string]: any;
  actionList: ActionItem[];
  onAction?: (info: ActionItem) => void;
}

export interface ActionItem {
  info?: string;
  type?: 'disabled' | 'active';
}

/**
 * 底部组件
 * @returns
 */
function ChatFooter(props: ChatFooterProps) {
  const { actionList } = props;
  const [active, setActive] = useState(false);
  const [selectedAction, setSelectedAction] = useState(0);
  return (
    <div
      {...props}
      className={classnames(styles.empty_block, props?.className, {
        [styles.active]: active,
      })}
    >
      {active && (
        <div
          className={styles.active_mask}
          onClick={() => {
            setActive(false);
          }}
        ></div>
      )}
      <div
        className={classnames(styles.footer, {
          [styles.active]: active,
        })}
      >
        <div className={styles.action_list}>
          {active ? (
            actionList.map((item, index) => {
              return (
                <ChatBtn
                  onConfirm={() => {
                    setActive(false);
                    if (item.type === 'disabled') return;
                    props?.onAction?.(item);
                  }}
                  onCheck={() => {
                    setSelectedAction(index);
                  }}
                  active={selectedAction === index}
                  key={index}
                  item={item}
                />
              );
            })
          ) : (
            <div
              className={styles.chat_btn}
              onClick={() => {
                setActive(true);
              }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}
interface ChatBtnProps {
  [key: string]: any;
  item: ActionItem;
}
const ChatBtn = (props: ChatBtnProps) => {
  const { item, onConfirm, active, onCheck } = props;
  return (
    <div
      className={classnames(styles.chat_btn, {
        [styles.active_btn]: active,
        [styles.disabled_btn]: item?.type === 'disabled',
      })}
      onClick={() => {
        if (active) {
          onConfirm();
          return;
        }
        onCheck();
      }}
    >
      {item?.info}
    </div>
  );
};

export default ChatFooter;
