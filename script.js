//Session storage

//Session Storage'a veri eklemek için sessionStorage 
//nesnesinin setItem() metodu kullanılır.

sessionStorage.setItem("isim","Kübra");

//Session Storage'dan veri okumak için sessionStorage nesnesinin getItem() metodu kullanılır.

console.log(sessionStorage.getItem("isim"));

//Session Storage'dan veri silmek için sessionStorage nesnesinin removeItem() metodu kullanılır.

sessionStorage.removeItem("isim");

//Session Storage'daki tüm verileri silmek için sessionStorage nesnesinin clear() metodu kullanılır.

sessionStorage.clear();



//Cookie 

//Cookie veya çerez dinamik web uygulamalarında kullanıcı tarayıcısında, kullanıcı bilgilerini saklamak için kullanılan dosyalardır.

//Javascript cookie oluşturma, okuma ve silme işlemi için “document.cookie” özelliği kullanılır.
document.cookie = "name=Kübra"; //tarayıcı kapandığında silinir

// javascript cookie okuma işlemi için document.write özelliği kullanılır.
var cookie_string = document.cookie;

//Javascript Cookie Okuma Fonksiyonu
function getCookie(c_name) {
	var name = c_name + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length,c.length);
		}
	}
	return "";
}

//Javascript Cookie Oluşturma, Düzenleme ve Silme Fonksiyonu
function setCookie(c_name,value,exdays){ //cookie oluşturma 
	var exdate=new Date();
	exdate.setTime(exdate.getTime() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; path=/; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

// Cookie ömrünün ne olacağı;
// Time in the future
//var expire = Date.now();

// Add period in minutes
//expire.setMinutes(expire.getMinutes() + 40);

// Add period in hours
//expire.setHours(expire.getHours() + 3);

Cookies.set('name', 'value', { expires: expire});