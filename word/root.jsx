import word from './word'
import React from 'react'
import _ from 'lodash'
import shuffle from 'lodash/shuffle'
import Jade from './root.jade'

window.d = window.debug = console.log.bind(console)

const wordList = word.trim().split('\n').slice(0, 50)



const wordInfo = shuffle(wordList).map(v=>{
	const i = v.indexOf(' ')
	return {en:v.slice(0, i), zh:v.slice(i+1)}
})

const REMEMBERD = 3
const NORMAL = 2

// 显示所有单词/未记住的单词
const SHOW_ALL_WORD = false
const SHOW_ALL_WORD_ZH = false

export default React.createClass({
	getInitialState(){
		let state = {m:{}}
		const j = localStorage['word_1']
		if(j){
			state = JSON.parse(j)
		}
		return Object.assign(state, {showZh:true, wordNow: ''})
	},
	onClick(en, value){
		const state = {m:Object.assign({}, this.state.m, {[en]:value})}
		this.setState(state)
		this.sync(state)
	},
	onChoose(en){
		this.setState({
			wordNow:en
		})
	},
	sync(state){
		const s = state || this.state
		const j = JSON.stringify(s)
		localStorage['word_1'] = j
	},
	render(){
		const m = this.state.m
		const wordNow = this.state.wordNow
		const words = wordInfo.map((v, i)=>{
			let lineClass = 'line '
			if(m[v.en] === REMEMBERD) {
				if(SHOW_ALL_WORD === false){
					return null
				}
				lineClass = 'line remember'
			}
			if(v.en === wordNow){
				lineClass += ' now'
			}
			let zhStyle={}
			if(SHOW_ALL_WORD_ZH){
				zhStyle = {color:'#000'}
			}
			const onClick = ()=>this.onChoose(v.en)
			return {en:v.en, zh:v.zh, zhStyle, lineClass, onClick}
		}).filter(v=>v)
		// d('words', words)
		return Jade({words, wordNow:this.state.wordNow})
	}
})


function exportData(){
	return _.keys(JSON.parse(localStorage.word_1).m).join('\n')
}
window.exportData = exportData


function exportText(){
	const r = []
	_.map(document.querySelectorAll('.line'),v=>{
		const en = v.childNodes[0].innerText
		const zh = v.childNodes[1].innerText.replace(/[\w\.\s]*/g, '')
		r.push(en)	
		r.push(en)	
		r.push(en)	
		r.push(zh)	
		r.push(en)	
		r.push(en)	
		r.push(en)	
		r.push(en)	
	})
	return r.join('\n')
}
window.exportText = exportText