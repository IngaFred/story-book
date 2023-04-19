import React, { useState } from 'react';
import classnames from 'classnames';
import type { ActionItem } from '@/data/action-list';

import styles from './index.module.scss';
import { Ellipsis } from 'antd-mobile';

export interface ChatFooterProps {
  [key: string]: any;
  actionList: ActionItem[];
  onAction?: (info: ActionItem) => void;
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
            <ChatBtn
              onClick={() => {
                setActive(true);
              }}
              active={selectedAction === 0}
              item={actionList[0]}
              close
            />
            // <div
            //   className={styles.chat_btn}
            //   onClick={() => {
            //     setActive(true);
            //   }}
            // ></div>
          )}
        </div>
      </div>
    </div>
  );
}
interface ChatBtnProps {
  [key: string]: any;
  item: ActionItem;
  active: boolean;
  onCheck?: () => void;
  onConfirm?: () => void;
  close?: boolean;
}
const ChatBtn = (props: ChatBtnProps) => {
  const { item, onConfirm, active, onCheck, onClick, close } = props;
  return (
    <div
      className={classnames(styles.chat_btn, {
        [styles.active_btn]: active,
        [styles.disabled_btn]: item?.type === 'disabled' || close,
      })}
      onClick={(e) => {
        onClick?.(e);
        if (active) {
          onConfirm?.();
          return;
        }
        onCheck?.();
      }}
    >
      {close ? (
        <Ellipsis direction="end" content={String(item?.chatData?.info)} />
      ) : (
        item?.chatData?.info
      )}
    </div>
  );
};

export default ChatFooter;
