var Provider = (function (React) {
  var __extends = function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
    function __ () { this.constructor = d }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
  }
  __extends(Provider, React.Component)
  function Provider (props) {
    React.Component.call(this, props)
    this.state = props.store.state()
    props.store.listen(this.setState.bind(this))
  }
  Provider.prototype.render = function () {
    var _this = this
    var children = this.props.children.map(function (child) {
      return React.cloneElement(child, _this.state)
    })
    return React.h.apply(null, ['div', null].concat(children))
  }
  return Provider
}(preact))
