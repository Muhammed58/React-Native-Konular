


// ***********************  IKI FARKLI FUNCTION YAZIM YÖNTEMİ **************************


    // YÖNTEM -1
    function calculateBMI(weight, height){

        //Beden Kitle Index i hesaplanıp noktadan sonraki sayıları 2 rakam ile sınırlanması
        const BMI = ( weight/(height * height) ).toFixed(2)

        console.log(BMI) // gerçek hayat kullanımında mobil yada web de alert kullanarak ekrana çıktı alınabilir
    }

    // 80 kilo 1.75 boy hesaplaması
    calculateBMI(80, 1.75)



    // YÖNTEM - 2
    const calculateBMI2 = (weight, height)=>{

        //Beden Kitle Index i hesaplanıp noktadan sonraki sayıları 2 rakam ile sınırlanması
        const BMI = ( weight/(height * height) ).toFixed(2)

        console.log(BMI)
    }

    // 80 kilo 1.70 boy hesaplaması
    calculateBMI2(80, 1.70)

// *******************************************************************************



// *********************** RETURN KULLANIMI **************************

const ornekFunctionIsmi = (x, y)=>{

    const yapilacakSayisi = x * y
    const gunSayisi = y

    return {
        yapilacakSayisi,
        gunSayisi
    }

}   

ornekFunctionIsmi(5, 4) // çıktı obje formatinda backend ya da AsyncStorage set edilmeye hazir durumda

// Return bize istediğimiz çıktıları almamızı sağlıyor.

// *******************************************************************************





// ***********************  FUNCTION İLE OBJE DATABASE GİDECEK OBJEYİ SET ETMEK **************************

const person =(name, lastName, image, age, workdays)=>{
    const data = {
        profileName: name,
        profileLastName: lastName,
        profileImage: image,
        profileAge: age * 2 ,
        totalWorkDays: ((workdays * 365) /3)
    }
    return data; // return yazdıktan sonra alt satıra yazılanlar işleme alınmaz.

    console.log(data) // Yukarıda return olduğu için bu kod satırı çalışmayacak! Çalışması için return üstünde kalan satırlara taşınmalıdır.

}

// Eğer verilerden birisi gönderilmeyecek ise verinin sıralamadaki yerine "undefined" yazilmak zorundadır
// const person1 = person('Cem', undefined, './src/image', 30 , 240)

// const person2 = person('Dilek', "Gezen", './src/image/', 25, 367 )


// Aynı fonksiyonu kullanarak birden fazla kişinin verisini obje formatında hazır hale getiriyoruz.
// Bu obje database'e kayit olarak gönderilmeye hazırdır


// *******************************************************************************


