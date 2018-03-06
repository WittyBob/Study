function getUser(path, callback) {
    return $.get(path, function(info) {
        return callback(info);
    })
}

getUser('/api/user', function(resp) {
    // resp为成功请求之后返回的数据
    console.log(resp);
})
