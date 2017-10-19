declare module 'quickhull3d'
{
    type Vertex = number[];
    type FaceVertexIndices = number[];

    export default function qh(verts: Vertex[]): FaceVertexIndices[];
}

