import Vuetify from 'vuetify'

import Home from '@/views/Home'

import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuetify)

const $route = {
  path: '/',
  params: {
    error: { message: 'Request failed with status code 404' },
    message: 'This is a message'
  }
}

describe('Home.vue', () => {
  let vuetify
  let wrapper

  beforeEach(() => {
    vuetify = new Vuetify()
    wrapper = shallowMount(Home, {
      localVue,
      mocks: {
        $route
      }
    })
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

})
