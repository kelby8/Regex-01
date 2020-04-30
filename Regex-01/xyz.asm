default rel
section .text
global main
main:
push qword 0
pop rax
mov [lbl0], rax
push qword 0
pop rax
mov [lbl1], rax
push qword 1
pop rax
mov [lbl2], rax
lbl4:
push qword [lbl0]
push qword 10
pop rax
cmp [rsp],rax
setl  al
movzx qword rax, al
mov [rsp], rax
pop rax
cmp rax, 0
je lbl5
push qword [lbl1]
push qword [lbl2]
pop rbx
pop rax
add rax, rbx
push rax
pop rax
mov [lbl3], rax
push qword [lbl1]
pop rax
mov [lbl2], rax
push qword [lbl3]
pop rax
mov [lbl1], rax
push qword [lbl0]
push qword 1
pop rbx
pop rax
add rax, rbx
push rax
pop rax
mov [lbl0], rax
cmp rax, 0
je lbl4
lbl5:
push qword [lbl1]
pop rax
ret
ret
section .data
lbl0:
dq 0
lbl1:
dq 0
lbl2:
dq 0
lbl3:
dq 0