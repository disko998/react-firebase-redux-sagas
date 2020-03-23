//@ts-nocheck
import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from './text-input'

it('text input render', () => {
    expect(shallow(<TextInput />)).toMatchSnapshot()
})
