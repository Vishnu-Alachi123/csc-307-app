import mut from './module.js'

//SUM test

test('Testing sum -- sucess', () =>{
    const expected = 30;
    const got = mut.sum(20,10);
    expect(got).toBe(expected);

})

//DIV tests

test('Testing div -- sucess', () => {
    const expected = 0.5;
    const got = mut.div(1,2);
    expect(got).toBe(expected);
})

test('Testing div (divide by negative) -- sucess', () => {
    const expected = -0.5;
    const got = mut.div(1,-2);
    expect(got).toBe(expected);
})

test('Testing div (divide 0) -- sucess', () => {
    const expected = 0;
    const got = mut.div(0,2);
    expect(got).toBe(expected);
})

test('Testing div (divide by 0) -- sucess', () => {
    const expected = Infinity;
    const got = mut.div(2,0);
    expect(got).toBe(expected);
})

test('Testing div (divide 0 by 0) -- sucess', () => {
    const expected = NaN;
    const got = mut.div(0,0);
    expect(got).toBe(expected);
})

//CONTAINS_NUMBER tests

test('Testing containsNumber (includes numbers) -- sucess', () => {
    const expected = true;
    const text = "Th1s is a text string that contains numb3rs"
    const got = mut.containsNumber(text);
    expect(got).toBe(expected);
})

test('Testing containsNumber (no numbers but has spaces) -- sucess', () => {
    const expected = false;
    const text = "This is a text string that does not contains numbers"
    const got = mut.containsNumber(text);
    expect(got).toBe(expected);
})
//Test fails as containsNumber isNaN() function returns spaces as a number

test('Testing containsNumber (no numbers but has \\n ) -- sucess', () => {
    const expected = false;
    const text = "Thisisatextstringthatcontainsnumbers\n"
    const got = mut.containsNumber(text);
    expect(got).toBe(expected);
})
//Test fails as containsNumber isNaN() function returns \n as a number


test('Testing containsNumber ( no numbers or spaces) -- sucess', () => {
    const expected = false;
    const text = "Thisisatextstringthatcontainsnumbers"
    const got = mut.containsNumber(text);
    expect(got).toBe(expected);
})

