%include "doCall.asm"
mov arg0, 0
mov arg1, string_r
ffcall fdopen
mov[stdin], rax
mov arg0, 1
mov arg1, string_w
ffcall fdopen
mov[stdout], rax
default rel
section .text
global main
main:
push qword lbl2
mov arg0, [rsp]
mov arg1, string_a
ffcall fopen
mov arg0, rax
ffcall fclose
pop arg0
mov arg1, string_rplus
ffcall fopen
push rax
pop rax
mov [lbl0], rax
push qword [lbl0]
push qword 40
push qword 2
pop rbx
pop rax
add rax, rbx
push rax
pop arg2
mov arg1, string_percent_d
pop arg0
ffvcall fprintf,0
mov arg0, 0
ffcall fflush
push qword [lbl0]
pop arg0
ffcall fclose
push qword lbl2
mov arg0, [rsp]
mov arg1, string_a
ffcall fopen
mov arg0, rax
ffcall fclose
pop arg0
mov arg1, string_rplus
ffcall fopen
push rax
pop rax
mov [lbl0], rax
push qword [lbl0]
mov arg0, fgets_buffer
mov arg1, 64
mov arg2, [rsp]
ffcall fgets
mov arg0, fgets_buffer
mov arg1, 0
mov arg2, 10
ffcall strtol
push rax
pop rax
mov [lbl1], rax
push qword lbl3
pop arg1
mov arg0, string_percent_s
ffvcall printf,0
mov arg0, 0
ffcall fflush
push qword [lbl1]
pop arg1
mov arg0, string_percent_d
ffvcall printf,0
mov arg0, 0
ffcall fflush
push qword [lbl0]
pop arg0
ffcall fclose
push qword 0
pop rax
ret
ret
section .data
stdin: dq 0
stdout: dq 0
string_r: db 'r', 0
string_w: db 'w', 0
string_a: db 'a', 0
string_rplus: db 'r+', 0
string_percent_s: db '%s', 0
string_percent_d: db '%d', 0
fgets_buffer: times 64 db 0
lbl0:
dq 0
lbl1:
dq 0
lbl2:
db 98
db 108
db 97
db 104
db 0
lbl3:
db 118
db 97
db 108
db 117
db 101
db 32
db 105
db 115
db 32
db 0