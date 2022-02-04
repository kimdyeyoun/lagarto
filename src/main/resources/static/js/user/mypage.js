{
    const passswordFrmElem = document.querySelector('#password-frm');
    const dataElem = passswordFrmElem.querySelector('#data');
    const paswordUPD = passswordFrmElem.querySelector('#paswordUPD');
    const paswordCHk = passswordFrmElem.querySelector('#paswordCHk');
    const passwordUpwElem = passswordFrmElem.querySelector('#password-current-input');
    const passwordNewUpwElem = passswordFrmElem.querySelector('#password-upd-input');
    const passwordChkUpwElem = passswordFrmElem.querySelector('#password-chk-input');
    const passwordSmtElem = passswordFrmElem.querySelector('#password-smt');
    const div = document.createElement('div');
    div.innerHTML=`비밀번호가 일치하지 않습니다`;
    div.id = 'errpasswordCHK';
    div.style.color='red';
    div.style.display='relative';
    div.style.paddingLeft='125px'

    const div2 = document.createElement('div');
    div2.innerHTML=`비밀번호가 일치합니다`;
    div2.id = 'newerrpasswordCHK';
    div2.style.color='green';
    div2.style.display='relative';
    div2.style.paddingLeft='125px'

    if (passswordFrmElem){
        passwordNewUpwElem.addEventListener('keyup', e => {
            const errpasswordCHKElem = paswordCHk.querySelector('#errpasswordCHK');
            const newerrpasswordCHKElem = paswordCHk.querySelector('#newerrpasswordCHK');
            if (passwordChkUpwElem.value !== passwordNewUpwElem.value){
                if (errpasswordCHKElem == null){
                    paswordCHk.appendChild(div);
                    if (newerrpasswordCHKElem !=null){
                        newerrpasswordCHKElem.remove();
                    }
                }
            }else if (passwordChkUpwElem.value.length === 0 && passwordNewUpwElem.value.length === 0 ){
                if (errpasswordCHKElem != null || newerrpasswordCHKElem != null){
                    errpasswordCHKElem.remove();
                }
            }else{
                if (newerrpasswordCHKElem == null){
                    paswordCHk.appendChild(div2)
                    if (errpasswordCHKElem != null){
                        errpasswordCHKElem.remove();
                    }
                }
            }
        });

        passwordChkUpwElem.addEventListener('keyup', (e) => {
            const errpasswordCHKElem = paswordCHk.querySelector('#errpasswordCHK');
            const newerrpasswordCHKElem = paswordCHk.querySelector('#newerrpasswordCHK');
            if (passwordChkUpwElem.value !== passwordNewUpwElem.value){
                if (errpasswordCHKElem == null){
                    paswordCHk.appendChild(div);
                    if (newerrpasswordCHKElem !=null){
                        newerrpasswordCHKElem.remove();
                    }
                }
            }else if (passwordChkUpwElem.value.length === 0 && passwordNewUpwElem.value.length === 0 ){
                if (errpasswordCHKElem != null || newerrpasswordCHKElem != null){
                    errpasswordCHKElem.remove();
                }
            }else{
                if (newerrpasswordCHKElem == null){
                    paswordCHk.appendChild(div2)
                    if (errpasswordCHKElem != null){
                        errpasswordCHKElem.remove();
                    }
                }
            }
        });
    }



    if (passswordFrmElem){
        passwordSmtElem.addEventListener('click', (e) => {

            fetch('/user/passwordCurrent', {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'iuser' : dataElem.dataset.iuser,
                    'upw' : passwordUpwElem.value,
                    'newUpw' : passwordNewUpwElem.value
                })
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
                switch (data.result){
                    case 0:
                        alert('변경실패')
                        e.preventDefault();
                        break;
                    case 1:
                        if (confirm('비밀번호를 변경 하시겠습니까?')){
                            alert('변경완료');
                            location.href="/user/logout";
                        }

                }
            })
        })
    }
    console.log(passwordUpwElem);
}