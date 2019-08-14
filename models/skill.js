const skills = [
    {
        id: 1,
        skills: 'javascript',
        level: 4.5
    },
    {
        id: 2,
        skills: 'c++',
        level: 3
    },
    {
        id: 3,
        skills: 'css',
        level: 5
    }
];

module.exports = {
    find
};

function find() {
    return skills;
}