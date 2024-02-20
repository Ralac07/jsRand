class random {
    static random() {
        return (Math.random());
    }
    static randint(a, b) {
        return (Math.ceil(Math.random() * ((b - a) + 1)) + a - 1);
    }
    static choice(arr) {
        return (arr[Math.ceil(Math.random() * arr.length) - 1]);
    }
    static shuffle(arr) {
        let wasString = false;
        let len = arr.length;
        if (typeof (arr) == 'string') {
            arr = arr.split('');
            wasString = true;
        }
        let newArr = [];
        for (let i = 0; i < len; i++) {
            newArr.push(arr.splice(Math.ceil(Math.random() * arr.length) - 1, 1)[0]);
        }
        return (wasString ? newArr.join('') : newArr);
    }
}
