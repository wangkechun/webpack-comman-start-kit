import word from './word'
window.d = window.debug = console.log.bind(console)

const wordList = word.trim().split('\n')

const wordInfo = wordList.map(v=>{
	const i = v.indexOf(' ')
	return {en:v.slice(0, i), zh:v.slice(i+1)}
})

const REMEMBERD = 3
const NORMAL = 2

export default React.createClass({
	getInitialState(){
		let state = {m:{}}
		const j = localStorage['word_1']
		if(j){
			state = JSON.parse(j)
		}
		return Object.assign(state, {showZh:true})
	},
	onClick(en, value){
		const state = {m:Object.assign({}, this.state.m, {[en]:value})}
		this.setState(state)
		this.sync(state)
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
				lineClass = 'line remember'
			}
			return (
				<div className={lineClass} key={i}>
					<div className='en'>{v.en}</div>
					<div className='zh'>{v.zh}</div>
					<div className='zhan' onClick={()=>this.onClick(v.en, REMEMBERD)}>斩</div>
					<div className='zhan' onClick={()=>this.onClick(v.en, NORMAL)}>撤销</div>
				</div>
			)
		})
		return (
			<div>
				<div className='words'>{words}</div>
				<div className='switch'>
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