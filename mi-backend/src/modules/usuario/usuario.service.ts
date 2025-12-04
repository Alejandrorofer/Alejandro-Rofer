// src/usuario/usuario.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.sto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    // Aquí podrías hashear la contraseña antes de guardar:
    // usuario.contrasenia = await bcrypt.hash(usuario.contrasenia, 10);
    return this.usuarioRepository.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { idusuario: id } });
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    return usuario;
  }

  async findByNombreUser(nombreUser: string): Promise<Usuario | null> {
    return this.usuarioRepository.findOne({ where: { nombreUser } });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);

    Object.assign(usuario, updateUsuarioDto);

    return this.usuarioRepository.save(usuario);
  }

  async remove(id: number): Promise<void> {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.remove(usuario);
  }
}
