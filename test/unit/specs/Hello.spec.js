import Heading from 'src/components/Heading'
import Vue from 'vue'

describe('Heading.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><heading></heading></div>',
      components: { Heading }
    }).$mount()
    expect(vm.$el.querySelector('.heading h1').textContent).to.contain('Welcome to the party.')
  })
})
