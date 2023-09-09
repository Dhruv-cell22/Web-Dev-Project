var oneplus = document.getElementById('oneplus')
var samsung = document.getElementById('samsung')
var apple = document.getElementById('apple')
var redmi = document.getElementById('redmi')
var vivo = document.getElementById('vivo')
var motorola = document.getElementById('motorola')
var select = document.getElementById('select')

oneplus.addEventListener('click', () => {
    select.innerHTML = ` <option value="">OnePlus</option>
    <option value="">OnePlus Nord N20 SE</option>
    <option value="">OnePlus Nord 2</option>
    <option value="">OnePlus 11</option>
    <option value="">OnePlus 2T</option>
    <option value="">OnePlus 10R</option>
    <option value="">OnePlus 10Pro</option>
    <option value="">OnePlus 9</option>
    <option value="">OnePlus 9 Pro</option>
    <option value="">OnePlus 10t</option>
    <option value="">OnePlus Nord CE 2</option>
    <option value="">OnePlus 8Pro</option>
    <option value="">OnePlus 6</option>
    <option value="">OnePlus 6T</option>
    
    
    `
})
samsung.addEventListener('click', () => {
    select.innerHTML = ` <option value="">Samsung</option>
    <option value="">samsung galaxy F13</option>
    <option value="">samsung galaxy A23</option>
    <option value="">samsung galaxy F44/option>
    <option value="">samsung galaxy M32</option>
    <option value="">samsung galaxy A23</option>
    <option value="">samsung galaxy A73</option>
    <option value="">samsung galaxy S22</option>
    <option value="">samsung galaxy S22 ultra </option>
    <option value="">samsung galaxy S23</option>
    <option value="">samsung galaxy S23 plus</option>
    <option value="">samsung galaxy S23 ultra</option>
    <option value="">samsung galaxy A53</option>
    <option value="">samsung galaxy A34</option>
    <option value="">samsung galaxy M53</option>
    <option value="">samsung galaxy M13</option>
    <option value="">samsung galaxy F23</option>
    <option value="">samsung galaxy M32</option>

    
    `
})
apple.addEventListener('click', () => {
    select.innerHTML = ` <option value="">apple</option>
    <option value="">iphone X</option>
    <option value="">iphone XR</option>
    <option value="">iphone 11/option>
    <option value="">iphone 11pro</option>
    <option value="">iphone 11Pro max</option>
    <option value="">iphone 12mini</option>
    <option value="">iphone 12</option>
    <option value="">iphone 12Pro </option>
    <option value="">iphone 12Pro Max</option>
    <option value="">iphone 13</option>
    <option value="">iphone 13Pro</option>
    <option value="">iphone 13Pro Max</option>
    <option value="">iphone 13Pro Max</option>
    <option value="">iphone 14</option>
    <option value="">iphone 14 Plus</option>
    <option value="">iphone 14 pro</option>
    <option value="">iphone 14 Pro Max</option>
    `
})
redmi.addEventListener('click', () => {
    select.innerHTML = ` <option value="">Redmi</option>
    <option value="">Redmi note 9</option>
    <option value="">Redmi note 9Pro</option>
    <option value="">Redmi note 10/option>
    <option value="">Redmi note 10Lite</option>
    <option value="">Redmi note 10 Pro</option>
    <option value="">Redmi note 10T</option>
    <option value="">Redmi note 11</option>
    <option value="">Redmi note 11Lite</option>
    <option value="">Redmi note 11Pro </option>
    <option value="">Redmi note 12</option>
    <option value="">Redmi note Pro</option>
    <option value="">Redmi 9</option>
    <option value="">Redmi 10 Max</option>
    <option value="">Redmi 11</option>
    <option value="">Redmi 12</option>
    <option value="">Redmi K60</option>
    <option value="">Redmi K20</option>
    
    `
})
vivo.addEventListener('click', () => {
    select.innerHTML = ` <option value="">vivo</option>
    <option value="">vivo Y100 </option>
    <option value="">vivo V27</option>
    <option value="">vivo s16/option>
    <option value="">vivo V25</option>
    <option value="">vivo V25 Pro </option>
    <option value="">vivo T1</option>
    <option value="">vivo V26</option>
    <option value="">vivo note 11Lite</option>
    <option value="">vivo note 11Pro </option>
    <option value="">vivo note 12</option>
    <option value="">vivo note Pro</option>
    <option value="">vivo 9</option>
    <option value="">vivo 10 Max</option>
    <option value="">vivo 11</option>
    <option value="">vivo 12</option>
    <option value="">vivo K60</option>
    <option value="">vivo K20</option>
    `
})


