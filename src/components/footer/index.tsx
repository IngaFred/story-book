import React from 'react';
import ListItem from '@/components/list-item';
import styles from './index.module.scss';
import { MailFill, MessageFill, SmileFill, StarFill } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';

export interface FooterProps {}

/**
 * 底部组件
 * @returns
 */
function Footer(props: FooterProps) {
  interface Footer {
    name: string;
    icon: any;
    path: string;
  }
  const footers: Footer[] = [
    {
      name: '聊天',
      icon: <MessageFill style={{fontSize: '1.3rem'}} />,
      path: '/home',
    },
    {
      name: '物品',
      icon: <MailFill style={{fontSize: '1.3rem'}} />,
      path: '/itemBars',
    },
    {
      name: '地图',
      icon: <StarFill style={{fontSize: '1.3rem'}} />,
      path: '/home',
    },
    {
      name: '角色',
      icon: <SmileFill style={{fontSize: '1.3rem'}} />,
      path: '/myself',
    },
  ];
  const navigate = useNavigate();
  const handleFooter = (path: string) => {
    navigate(path);
  };
  return (
    <div className={styles.empty_block}>
      <div className={styles.footer}>
        {footers.map((item, index) => {
          return (
            <div key={index}>
              <div onClick={() => handleFooter(item.path)}>
                <div className={styles.img}>{item.icon}</div>
                <span className={styles.text}>{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
