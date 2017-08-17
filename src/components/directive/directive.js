/**
 * Created by Crystal on 2017/8/11.
 */
import Vue from 'vue'

const color = Vue.directive('color', {
  inserted: function (el, binding) {
    el.style.color = binding.value
  }
});

const focus = Vue.directive('focus', {
  inserted: function (el, binding) {
    el.focus();
  }
});

export {color}
