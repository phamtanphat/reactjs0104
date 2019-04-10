
const teo = {
    name : 'Nguyen Van Teo',
    age : 20,
    sayhello(){
        console.log(`Xin chao ban ${this.name}`);
    }
}

const ti = teo.sayhello;
ti.bind({name : 'Teo'})();