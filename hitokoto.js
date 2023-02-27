$.ajax({
    type: 'GET',
    url: 'https://v1.hitokoto.cn/?c=a&c=b&c=c&c=h&c=i&c=j&c=k&encode=json&charset=utf-8',
    dataType: 'json',
    async: false,
    success (data) {
		$("hitokoto_text").attr("href", "https://hitokoto.cn/?uuid=$" + data.uuid);
		hitokoto = String(data.hitokoto);
		// 判断来源空值
		if ( data.from_who === null || data.from_who === undefined || data.from_who === '') {
			no_from_who = 1;
		}
		else {
			no_from_who = 0;
			from_who = String(data.from_who);
		};
		// 判断作者空值
		if ( data.from === null || data.from === undefined || data.from === '') {
			no_from = 1;
		}
		else {
			no_from = 0;
			from = String('[' + data.from + ']');
		};
		if ( no_from_who === 1 ) {
			// 来源空值时没有不加来源
			hitokotoText =  hitokoto + '------' + from;
		}
		else if ( no_from === 1 ) {
			// 作者空值时没有不加作者
			hitokotoText = hitokoto + '------' + from_who;
		}
		else if ( no_from === 1 && no_from_who === 1 ) {
			// 都空值时只有句子
			hitokotoText = hitokoto;
		}
		else {
			// 都不为空值时都有
			hitokotoText = hitokoto + '------' + from_who + from;
		}
		// 一个漂亮的输出
		$('#hitokoto_text').text(hitokotoText);
    },
});