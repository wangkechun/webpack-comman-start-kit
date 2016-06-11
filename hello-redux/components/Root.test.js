import test from 'ava'
import {If, IfElse, Root} from './Root'
import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import {render} from 'enzyme';

var ReactDOMServer = require('react-dom/server');


test('If true', t=>{
	const r1 = <If if={true}><h1>aaa</h1></If>
	const h1 = ReactDOMServer.renderToString(r1)
	t.true(h1.indexOf('h1')>0)
})

test('If false', t=>{
	const r1 = <If if={false}><h1>aaa</h1></If>
	const h1 = ReactDOMServer.renderToString(r1)
	t.true(h1.indexOf('h1')==-1)
})

test('IfElse true', t=>{
	const r1 = <IfElse if={true}><h1>aaa</h1><h1>bbb</h1></IfElse>
	const h1 = ReactDOMServer.renderToString(r1)
	t.true(h1.indexOf('aaa')>0)
	t.true(h1.indexOf('bbb')==-1)
})


test('IfElse false', t=>{
	const r1 = <IfElse if={false}><h1>aaa</h1><h1>bbb</h1></IfElse>
	const h1 = ReactDOMServer.renderToString(r1)
	t.true(h1.indexOf('aaa')==-1)
	t.true(h1.indexOf('bbb')>0)
})



test('Root', t=>{
	const r1 = (
		<Root
			cnt={11999}
			add={()=>1}
		/>
	)
	const h2 = render(r1)
	t.true(h2.find('h1').eq(0).text()==='11999')
})


test('test react', t=>{
	const r1 = <div className="b"><div className="a">aa</div> </div>
	const app = render(r1)
	const text = app.find('.a').text()
	t.true(text==='aa')
})

