<template>
    <div>
        <h1>Skill</h1><br>
        <div class="skill-item">
            <div class="skill-info">
                <div class="skill-box">
                    <img src="@/assets/html-css-logo.jpg" class="img-responsive" style="width:50%" alt="Image">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="skill-info">
                <div class="skill-box">
                    <img src="@/assets/js-logo.png" class="img-responsive" style="width:34%" alt="Image">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="skill-info">
                <div class="skill-box">
                    <img src="@/assets/python-logo.png" class="img-responsive" style="width:28%" alt="Image">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div><br>
        <div class="skill-item">
            <div class="skill-info">
                <div class="skill-box">
                    <img src="@/assets/c-logo.png" class="img-responsive" style="width:57%" alt="Image">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="skill-info">
                <div class="skill-box">
                    <img src="@/assets/java-logo.png" class="img-responsive" style="width:63%" alt="Image">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="skill-info">
                <div class="skill-box">
                    <img src="@/assets/csharp-logo.png" class="img-responsive" style="width:31.6%" alt="Image">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .skill-item {
        display: flex;
        justify-content: space-between;
        margin: 0 50px;
    }

    .skill-info {
        width: 30%;
    }

    .skill-box {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 5px;
    }
</style>
