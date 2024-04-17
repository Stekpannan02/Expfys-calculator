function calculateScore() {
    const BetygA = parseFloat(document.getElementById('BetygA').value);

    const SnabbaLabb = parseFloat(document.getElementById('SnabbaLabb').value);
    const SnabbaRapp = parseFloat(document.getElementById('SnabbaRapp').value);
    const SnabbaFor = parseFloat(document.getElementById('SnabbaFor').value);

    const BrusLabb = parseFloat(document.getElementById('BrusLabb').value);
    const BrusRapp = parseFloat(document.getElementById('BrusRapp').value);
    const BrusFor = parseFloat(document.getElementById('BrusFor').value);

    const TeoriFor = parseFloat(document.getElementById('TeoriFor').value);

    const LabFor = parseFloat(document.getElementById('LabFor').value);
    const LabLab = parseFloat(document.getElementById('LabLab').value);
    const LabLars = parseFloat(document.getElementById('LabLars').value);

    const Snabba = SnabbaFor + SnabbaLabb * 2 + SnabbaRapp * 2;
    const Brus = BrusFor + BrusLabb * 2 + BrusRapp * 2;
    const Labview = LabFor + LabLab * 2 + LabLars * 2;
    const Teori = 3 * TeoriFor;

    const Totalpoäng = BetygA * 0.4 + 0.6 * (Snabba + Brus + Labview + Teori) / 18;
    document.getElementById('totalScore').innerText = Totalpoäng.toFixed(2);
}
