import React from 'react'
import styles from './index.module.scss';
import { Grid, Image } from 'antd-mobile';
import A from '../../../../../assets/images/items/1-.jpg';
import B from '../../../../../assets/images/items/2- .jpg';
import C from '../../../../../assets/images/items/3-.jpg';
import D from '../../../../../assets/images/items/4-.jpg';
import E from '../../../../../assets/images/items/5-.jpg';
import F from '../../../../../assets/images/items/6-.jpg';
import G from '../../../../../assets/images/items/7-.jpg';
import H from '../../../../../assets/images/items/8-.jpg';
import I from '../../../../../assets/images/items/9-.jpg';
import { useNavigate } from 'react-router-dom';

export interface items {
	name: string,
	url: string,
	introduction: string,
}
const itemList: items[] = [
	{
		name: '线索一',
		url: A,
		introduction: '请根据线索所给信息，推断剧情演变。'
	},
	{
		name: '线索二',
		url: B,
		introduction: '请根据线索所给信息，推断剧情演变。'
	},
	{
		name: '线索三',
		url: C,
		introduction: '请根据线索所给信息，推断剧情演变。'
	},
	{
		name: '线索四',
		url: D,
		introduction: '请根据线索所给信息，推断剧情演变。'
	},
    {
		name: '线索五',
		url: E,
		introduction: '请根据线索所给信息，推断剧情演变。'
	},
    {
		name: '线索六',
		url: F,
		introduction: '请根据线索所给信息，推断剧情演变。'
	},
    {
		name: '线索七',
		url: G,
		introduction: '请根据线索所给信息，推断剧情演变。'
	},
    {
		name: '线索八',
		url: H,
		introduction: '请根据线索所给信息，推断剧情演变。'
	},
    {
		name: '线索九',
		url: I,
		introduction: '请根据线索所给信息，推断剧情演变。'
	},
]
export default function ItemShow() {
    const navigate = useNavigate();
	const handleFooter = (selectItem: items) => {
		navigate('/itemDetails', {state: {character: selectItem}});
	}
  return (
    <div className={styles.all}>
        <Grid columns={3} gap={8}>
        {itemList.map((item, index) => {
				return (
					<div key={index}>
						<div onClick={() => handleFooter(item)} className={styles.one}>
							<Image src={item.url} fit='fill' className={styles.image}/>
							<span className={styles.span}>{item.name}</span>
						</div>
					</div>
				)
			})}
        </Grid>
    </div>
  )
}
