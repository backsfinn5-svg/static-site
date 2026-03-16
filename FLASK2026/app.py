from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/basisschool/<school>")
def basisschool_school(school):
    return render_template("school.html", category="Basisschool", school=school)




@app.route("/secundair/<school>")
def secundair_school(school):
    return render_template("school.html", category="Secundair", school=school)


@app.route("/secundair/<school>/finaliteiten")
def secundair_finaliteiten(school):
    return render_template("finaliteiten.html", category="Secundair", school=school)


@app.route("/secundair/<school>/infomomenten")
def secundair_infomomenten(school):
    return render_template("infomomenten.html", category="Secundair", school=school)


@app.route("/persbericht")
def persbericht():
    return render_template("persbericht.html")


if __name__ == "__main__":
    app.run(debug=True)
