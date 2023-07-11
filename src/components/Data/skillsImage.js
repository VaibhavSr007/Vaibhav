import html from '../../assets/svg/skills/html.svg'
import docker from '../../assets/svg/skills/docker.svg'
import css from '../../assets/svg/skills/css.svg'
import javascript from '../../assets/svg/skills/javascript.svg'
import react from '../../assets/svg/skills/react.svg'
import typescript from '../../assets/svg/skills/typescript.svg'
import bootstrap from '../../assets/svg/skills/bootstrap.svg'
import mongoDB from '../../assets/svg/skills/mongoDB.svg'
import tailwind from '../../assets/svg/skills/tailwind.svg'
import cplusplus from '../../assets/svg/skills/cplusplus.svg'
import java from '../../assets/svg/skills/java.svg'
import python from '../../assets/svg/skills/python.svg'
import aws from '../../assets/svg/skills/aws.svg'
import django from '../../assets/svg/skills/django.svg'
import git from '../../assets/svg/skills/git.svg'
import materialui from '../../assets/svg/skills/materialui.svg'
import microsoftoffice from '../../assets/svg/skills/microsoftoffice.svg'
import node from '../../assets/svg/skills/node.svg'
import redis from '../../assets/svg/skills/redis.svg'
import canva from '../../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'node':
            return node;
        case 'redis':
            return redis;
        case 'html':
            return html;
        case 'docker':
            return docker;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'tailwind':
            return tailwind;
        case 'c++':
            return cplusplus;
        case 'java':
            return java;
        case 'python':
            return python;
        case 'aws':
            return aws;
        case 'django':
            return django;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'microsoft office':
            return microsoftoffice;
        case 'canva':
            return canva;
        default:
            break;
    }
}