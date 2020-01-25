const Lammas = require('./lammas');


test('Create Lammas with name Dolly, check that name is Dolly', () => {
    const l = new Lammas('Dolly');
    expect(l.getName()).toBe('Dolly');
});

