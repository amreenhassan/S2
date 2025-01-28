const lyrics = [
    "Put myself to sleep just so I can get closer to you inside my dreams.",
    "Promise me you won't regret me like the tattoos on my skin.",
    "I can see it in your eyes' cause they never tell me lies.",
    "We found each other, I helped you out of a broken place. You gave me comfort.",
    "You're my favorite kind of night.",
    "I said I didn't feel nothing baby, but I lied.",
    "We don’t have to rush when you're alone with me."
];

document.getElementById('new-lyric').addEventListener('click', () => {
    const randomLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
    document.getElementById('lyric-container').innerHTML = `<p>"${randomLyric}"</p>`;
});
