
function resume(output){
    output.innerHTML = `
        <br>
        <div>Nathan Taylor</div>
        <br>
        <div>pecan.pine@gmail.com</div>
        <div>pecan-pine.github.io</div>
        <br>
        <br>

        <div>Education</div>
        <br>

        <div>Oregon State University--Corvallis, Oregon / Online--Fall 2020 - Spring 2022</div>
            <div>B.S. Computer Science (in progress)</div>
        <br>
        <br>

        <div>University of Oregon--Eugene, Oregon--Fall 2017 - Spring 2019</div>
            <div>M.S. Mathematics</div>
        <br>
        <br>


        <div>Projects</div>
        <br>

        <div>Continuous Resume</div>
        <div>Designed a continuous delivery system for my resume. Resume data is stored in a
MongoDB database. A python program then inserts selected resume data into
several Jinja templates, which are processed into a LaTeX resume, HTML resume,
Markdown resume, and plaintext resume. When I push changes in my resume to
GitHub, a webhook sends a POST request to a server I configured. The server
then updates my website with the new resume changes.</div>
        <br>
        <br>

        <div>JavaScript</div>
        <div>I extended a React tic-tac-toe app by adding an opponent, the ability to resize
the board, and the option to play on a torus.</div>
        <br>
        <br>

        <div>GitHub Issue Browser</div>
        <div>Created a Flask implementation of a simple GitHub issue browser.</div>
        <br>
        <br>




        <div>Work Experience</div>
        <br>

        <div>Tutor.com--August 2020 - Present--Tutor</div>
        <div>Tutored high school and college students in Calculus and Python programming.
Teaching others to code has been a rewarding experience!</div>
        <br>
        <br>

        <div>University of Oregon--September 2017-August 2019--Graduate Employee</div>
        <div>Taught undergraduate Mathematics courses as the primary instructor. Planned the
structure of the course, determined the order in which content was covered,
wrote exams, and graded exams. Led a small team of graduate-students in a study
group that produced 50 pages of solutions to abstract algebra problems.</div>
        <br>
        <br>



    `;
}