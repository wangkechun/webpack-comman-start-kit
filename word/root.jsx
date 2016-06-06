import word from './word'
window.d = window.debug = console.log.bind(console)

const wordList = word.trim().split('\n')

const wordInfo = wordList.map(v=>{
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
		const words = wordInfo.map((v, i)=>{
			let lineClass = 'line '
			if(m[v.en] === REMEMBERD) {
				if(SHOW_ALL_WORD === false){
					return null
				}
				lineClass = 'line remember'
			}
			let zhStyle={}
			if(SHOW_ALL_WORD_ZH){
				zhStyle = {color:'#000'}
			}
			return (
				<div className={lineClass} key={i} onClick={()=>this.onChoose(v.en)}>
					<div className='en'>{v.en}</div>
					<div className='zh' style={zhStyle}>{v.zh}</div>
					<div className='zhan' onClick={()=>this.onClick(v.en, REMEMBERD)}>斩</div>
					<div className='zhan' onClick={()=>this.onClick(v.en, NORMAL)}>撤销</div>
				</div>
			)
		})
		return (
			<div className="container">
				<div className='words'>{words}</div>
				<div className='dict'>
					<iframe src={"http://dict.youdao.com/w/"+this.state.wordNow}></iframe>
				</div>
			</div>
		)
	}
})


// const key = 'word_1'

// function storageGet(){
// 	const r = localStorage[key]
// 	if(r && r.length){
// 		return JSON.parse(r)
// 	}else{
// 		localStorage[key] = '{}'
// 		return {}
// 	}
// }


// function storagePush(v){
// 	const r = localStorage[key]
// 	console.assert(r)
// 	const d = JSON.parse(r)
// 	d.push(v)
// 	localStorage[key] = JSON.stringify(d)
// }


// window.storageGet = storageGet
// window.storagePush = storagePush


function exportData(){
	return _.keys(JSON.parse(localStorage.word_1).m).join('\n')
}
window.exportData = exportData


function exportText(){
	const r = []
	_.map(document.querySelectorAll('.line'),v=>{
		const line = v.childNodes[0].innerText+'  '+v.childNodes[1].innerText.replace(/[\w\.\s]*/g, '')
		r.push(line)	
		r.push(line)	
		r.push(line)	
		r.push(line)	
	})
	return r.join('\n')
}
window.exportText = exportText