// pages/frame/custom-component/components/component-properties.js
Component({
  properties: {
    "propertya": {
      type: Boolean,
      value: false,  // 其实默认就是false的
      observer: function(newVal, oldVal) {
        console.info(`组件#${this.id}传入了propertya: ${newVal}, 类型: ${typeof(newVal)}`)
        this.setData({
          "innerpropertya": newVal,
        })
        console.info(this.properties);
      }
    },
    "propertydict": {
      type: Object,
      observer: function(newVal, oldVal) {
        console.info(`组件#${this.id}传入了propertydict: ${newVal}, 类型: ${typeof(newVal)}`)
        newVal["key"] += "new";
        this.setData({
          "innerpropertydict": newVal,
        })
        console.info(this.properties);
        this.triggerEvent(
          "dictchange",
          {}
        )
      }
    },
  },

  data: {
    "innerpropertya": undefined,
    "innerpropertydict": undefined,
  },

  attached: function() {
    console.info(this.properties);
  },

  options: {
    addGlobalClass: true,
  },
})
